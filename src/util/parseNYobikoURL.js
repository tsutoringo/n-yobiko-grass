export default function (url) {
	const result = url.match(/https:\/\/api.nnn.ed.nico\/v2\/material\/courses\/(\d+)\/chapters\/(\d+)/);
	return {
		courseId:  parseInt(result[1]),
		chapterId: parseInt(result[2])
	}
}