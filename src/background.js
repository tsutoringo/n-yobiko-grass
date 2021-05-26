import LearningSituation from './database';
import parseURL from './util/parseNYobikoURL';

const db = new LearningSituation();
window.db = db;
let updateCooltime = false;

chrome.runtime.onMessage.addListener(async (event = {}) => {
	//連続で飛んでくることがあるのでクールタイムをはさむ
	if (updateCooltime) return;
	updateCooltime = true;
	setTimeout(() => updateCooltime = false, 500);

	
	if (event.type === 'update') {
		const payload = JSON.parse(event.payload);

		if (payload.course_type === 'n_school') {
			// チャプター取得
			const oldChapter = await db.chapters.get(payload.chapter.id);

			const { courseId } = parseURL(event.url);

			if (oldChapter) {
				const oldSections = await db.getSectionsByChapterId(oldChapter.id).toArray();
				const newSections = payload.chapter.sections.reduce(
					(a, c) => {
						a.set(c.id, c);
						return a;
					},
					new Map()
				);

				for (const oldSec of oldSections) {
					const newSec = newSections.get(oldSec.id);

					// 新しく教材が終わっていたらイベント登録
					if (newSec.passed && !oldSec.passed) {
						await db.addEvent('ended', newSec.resource_type, newSec.id);
					}
				}

				// チェックが終わったらアップデート
				await db.bulkPutSection(payload.chapter.sections, payload.chapter.id, courseId);
			} else {
				createChapter(payload.chapter, courseId);
			}
		}
	}
});

const createChapter = async (chapter, courseId) => {
	await db.chapters.add({
		courseId,
		...chapter,
		sections: chapter.sections.map(sec => sec.id)
	});

	await db.bulkPutSection(chapter.sections, chapter.id, courseId);
}