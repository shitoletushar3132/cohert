export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message: 'You not sent a get request',
		});
	},
} satisfies ExportedHandler<Env>;
