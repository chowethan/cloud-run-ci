/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} request HTTP request context.
 * @param {!express:Response} response HTTP response context.
 */
export async function trigger(request, response) {
	response.type('application/json; charset=utf-8');
	response.status(200).send(JSON.stringify({ status: 200, statusText: 'OK' }, undefined, '\t'));
}
