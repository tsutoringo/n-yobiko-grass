<template>
	<timeline>
		<template #title>
			{{tomonth}} <span>{{toyear}}</span>
		</template>
		<template #default>
			<timeline-item v-if="endedChapter">
				<template #badge><octicon :icon="check"/></template>
				<template #title>Ended {{endedSectionCount}} sections in {{endedChapter.length}} chapters</template>
				<template #default>
					<ul>
						<li v-for="(chapter, k) in endedChapter" :key="k">
							<div>
								<a :href="`https://www.nnn.ed.nico/courses/${chapter.courseId}/chapters/${chapter.id}`" target="_blank">{{chapter.title}}</a>
								<a href="#" class="f6 link--muted sub-link">{{chapter.sections}} sections</a>
							</div>
							<Progress :max="maxEndedSectionCount" :val="chapter.sections" />
						</li>
					</ul>
				</template>
			</timeline-item>
			<timeline-item>
				<template #badge>a</template>
				<template #title>はじめた動画</template>
			</timeline-item>
			<timeline-item>
				<template #badge></template>
				<template #title>終わらせたテスト</template>
			</timeline-item>
		</template>
	</timeline>
</template>
<script>
import Timeline from './timeline/Timeline';
import TimelineItem from './timeline/Item';
import Progress from './Progress';
import { check } from 'octicons-vue';
import moment from 'moment';

export default {
	name: 'learningTimeline',
	components: { Timeline, TimelineItem, Progress },
	props: {
		targetMonth: {
			type: Date,
			default: () => new Date()
		}
	},
	data: () => ({
		check,
		endedChapter: null,
		endedSectionCount: 0
	}),
	methods: {
		async getSections () {
			const chapters = {}
			const events = await this
				.$db.getEvents(
					moment(this.targetMonth).startOf('month').toDate(),
					moment(this.targetMonth).endOf('month').toDate())
				.and(val => val.type === 'ended' && val.subType === 'section')
				.toArray();

			this.endedSectionCount = events.length;

			for (const event of events) {
				const section        = await this.$db.getSectionById(event.targetId);
				console.log(event, section)
				const { chapterId }  = section;

				if (!chapters[chapterId]) {
					const chapter = await this.$db.getChapterById(chapterId)
					chapter.sections = 0;
					chapters[chapterId] = chapter;
				}

				chapters[chapterId].sections++;
			}

			const result = Object.values(chapters).sort((a, b) => b.sections - a.sections)

			return result;
		}
	},
	computed: {
		maxEndedSectionCount () {
			return this.endedChapter[0]?.sections || 1;
		},
		tomonth () {
			return moment(this.targetMonth).format('MMM')
		},
		toyear () {
			return this.targetMonth.getFullYear();
		}
	},
	created () {
		this.getSections().then(chapters => {
			this.$set(this, 'endedChapter', chapters)
		});
	},
	mounted () {
		
	}
}
</script>