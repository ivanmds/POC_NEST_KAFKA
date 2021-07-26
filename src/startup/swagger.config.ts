import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class SwaggerConfig {
    static init(app: INestApplication) {
        
        const config = new DocumentBuilder()
            .setTitle('Core customer')
            .setDescription('The customer api')
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('swagger', app, document);
    }
}