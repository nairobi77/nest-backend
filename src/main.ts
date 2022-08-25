import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";


async function start() {
    const PORT = process.env.PORT || 8080;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("API description")
        .setDescription("REST API documentation")
        .setVersion("1.0.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log("App started at port ", PORT));
}

start();