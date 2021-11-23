const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'REST API',
            version: '1.0.0',
            description: 'actbase coding test',
        },
        host: 'localhost:4000',
        basePath: "/"
    },
    apis: ["./src/swagger/*.js"]
};

export default options;