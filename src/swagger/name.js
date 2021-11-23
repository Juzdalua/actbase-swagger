/**
 * @swagger
 *  /hello:
 *    get:
 *      summary: find User
 *      tags:
 *          - Names
 *      description: <h1>이름 조회</h1>      
 *      parameters:
 *        - in: query
 *          name: name
 *          required: true
 *          schema:
 *            type: string
 *            description: NAME
 *      responses:
 *       '200':
 *        description: 성공
 *        content:
 *         text/plain:
 *          schma: string
 */
