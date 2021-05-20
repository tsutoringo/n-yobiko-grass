import Dexie from 'dexie';
import schema from './schema.js';
import { v4 as uuid } from 'uuid';

/**
 * @class
 */
class LearningSituation extends Dexie {
	constructor () {
		super('LearningSituation');
		this.version(1).stores(schema);

		this.chapters = this.table('chapters');
		this.sections = this.table('sections');
		this.events = this.table('events');
	}

	/**
	 * Return the sections by Chapter ID
	 * @param {Number} id chapter id
	 * @returns {Dexie.Collection}
	 */
	getSectionsByChapterId (id) {
		return this.sections.where('chapterId').equals(id)
	}

	/**
	 * addEvent
	 * @param {String} type event type
	 * @param {String} subType event sub type
	 * @param {Number} targetId targetId
	 * @param {Date} [date=new Date()] date of event 
	 */
	addEvent (type, subType, targetId, date = new Date()) {
		return this.events.put({
			id: uuid(),
			type,
			subType,
			targetId,
			date
		});
	}

	/**
	 * BulkPut sections
	 * @param {Array} sections 
	 * @param {Number} chapterId 
	 * @param {Number} courseId 
	 */
	bulkPutSection (sections, chapterId, courseId) {
		return this.sections.bulkPut(sections.map((sec, index) => ({
			...sec,
			index,
			chapterId,
			courseId
		})));
	}
}

export default LearningSituation;
