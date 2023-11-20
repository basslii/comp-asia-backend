import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export const generateCorsOptions = (): CorsOptions => {
    console.log("ENV", process.env.CORS);
    if (process.env.CORS) {
        const defaults = {
            origin: "http://localhost:4200",
            credentials: true,
            allowHeaders: true
        }
        const cors = [];
        const envCors = process.env.CORS.split(",");
        cors.push(...envCors);
        if (cors.length > 0) {
            return { origin: cors, credentials: true };
        }
        return defaults;
    }
    
    return { exposedHeaders: ['Custom-Has-Hidden-Data-Header'] };
}