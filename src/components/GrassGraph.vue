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
					:title="`${day ? day.length : 0}進捗`"
				/>
			</template>
		</div>
	</div>
</template>
<script>
import Grass from './Grass.vue';
import moment, { max } from 'moment';

export default {
	name: 'GrassGraph',
	components: {
		Grass
	},
	data: () => ({
		days: [],
		dayCount: 0,
		max: 0
	}),
	methods: {

	},
	created () {
		const endDay = new Date();

		// 7日間 * 52 + 日曜日から立ってる日数+1
		this.dayCount = (7 * 52) + (endDay.getDay() + 1);
		this.days.push(...new Array(this.dayCount));

		const startDay = moment(endDay).subtract(this.dayCount - 1, 'day').startOf('day').toDate();
		let events = {};

		this.$db.events.where('date').between(startDay, endDay).each(event => {
			const diff = moment(
				moment(endDay).endOf('day')
			).diff(event.date, 'day');

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
	display: flex;
}

.grass-field {
	display: flex;
	height: calc(14px * 7);
	width: calc(14px * 53);
	flex-direction: column;
	flex-wrap: wrap;
	align-items: flex-start;
}

.day-of-week {
	color: #666666;
	font-size: 0.5rem;
	padding: 0 3px;
}

.day-of-week>* {
	height: 14px;
}
</style>