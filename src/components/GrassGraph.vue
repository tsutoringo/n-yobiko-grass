<template>
	<div class="grass-graph">
		<div class="day-of-week">
			<div></div>
			<div>Mon</div>
			<div></div>
			<div>Wed</div>
			<div></div>
			<div>Fri</div>
			<div></div>
		</div>
		<div class="grass-field">
			<template v-if="days">
				<grass
					v-for="(day, i) in days"
					:key="i"
					:level="day ? Math.ceil(day.length / max * 4) : 0"
					v-tooltip="`${day ? day.length : 0}進捗 | ${getDateByIndex(i)}`"
				/>
			</template>
		</div>
		<footer>
			<span class="colors">Less <grass :level="0"/><grass :level="1"/><grass :level="2"/><grass :level="3"/><grass :level="4"/> More</span>
		</footer>
	</div>
</template>
<script>
import Grass from './Grass.vue';
import moment from 'moment';

export default {
	name: 'GrassGraph',
	components: { Grass },
	data: () => ({
		days: [],
		dayCount: 0,
		max: 0
	}),
	methods: {
		getDateByIndex (i) {
			return moment(this.startDay).add(i-1, 'day').format('MMM DD, YYYY');
		}
	},
	computed: {
		moment () {
			return moment;
		}
	},
	created () {
		this.endDay = new Date();

		// 7日間 * 52 + 日曜日から立ってる日数+1
		this.dayCount = (7 * 52) + (this.endDay.getDay() + 1);
		this.days.push(...new Array(this.dayCount));

		this.startDay = moment(this.endDay).subtract(this.dayCount - 1, 'day').startOf('day').toDate();
		let events = {};

		this.$db.getEvents(this.startDay, this.endDay).each(event => {
			const diff = moment(this.endDay)
				.endOf('day')
				.diff(event.date, 'day');

			if (!events[diff]) events[diff] = []; 

			events[diff].push(event);
		}).finally(() => {
			this.max = Object.values(events).sort((a, b) => b.length - a.length)[0]?.length || 1;

			for (const diff in events) {
				const event = events[diff];
				this.days.splice(this.dayCount - diff - 1, 1, event);
			}
		});
	},
	mounted () {
	}
}
</script>
<style scoped>
.grass-graph {
	display: grid;
	padding-top: 4px;
	margin: 0 8px;
	padding-right: 12px;
}

.day-of-week {
	grid-row: 1 / 2;
	grid-column: 1 / 2;
	color: #666666;
	font-size: 0.5rem;
	padding: 0 3px;
}

.day-of-week>* {
	height: 13px;
}

.grass-field {
	grid-row: 1 / 2;
	grid-column: 2 / 3;
	display: flex;
	height: calc(13px * 7);
	width: calc(13px * 53);
	flex-direction: column;
	flex-wrap: wrap;
	align-items: flex-start;
}

footer {
	grid-row: 2 / 3;
	grid-column: 1 / 3;
	display: flex;
}

footer .colors {
	margin-left: auto;
	display: flex;
	align-items: center;
	padding: 5px;
}

footer .colors > .grass {
	margin: 0 2px;
	margin-top: 2.5px;
}

</style>