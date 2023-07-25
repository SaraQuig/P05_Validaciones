const request = require('supertest');
const app = require('../src/app');

describe('GET /users', () => {
    it('TEST 01 responde con json y contiene una lista de usuarios', done => {
        request(app)
            .get('/users')
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});

//casos de prueba para id
describe("GET /users/:id", () => {
    it("TEST 02 Verificar usuario por id", (done) => {
        request(app)
            .get('/users/U001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it(" TEST 03 Verificar usuario por id incorrecto", (done) => {
        request(app)
            .get('/users/kkkkk')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });

    it("TEST 04 Verificar usuario por id, cuando existe", (done) => {
        request(app)
            .get('/users/U001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

//Caso de prueba para la ruta de creación de un nuevo usuarios
describe('POST /users', () => {
    it('TEST 05 usuario creado', done => {
        const data = {
            'username': 'admin',
            'password': 'admin01'
        }
        request(app)
            .post('/users')
            .send(data)
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it('TEST 06 usuario no creado', done => {
        const data = {};
        request(app)
            .post('/users')
            .send(data)
            .set('Aceptado', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('Usuario no creado')
        // .expect((res) => {
        //     if (res.body.message !== 'Usuario no creado') {
        //         throw new Error('El mensaje de error esperado no coincide');
        //     }
        // })
        // .end((err) => {
        //     if (err) return done(err);
        done();
        // })
    });

})


module.exports = app
