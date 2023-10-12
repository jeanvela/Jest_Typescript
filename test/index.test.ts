import request from 'supertest'
import app from '../src/app'

describe('GET /tasks', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200)
    })

    it('should hola', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200)
    })
    
})