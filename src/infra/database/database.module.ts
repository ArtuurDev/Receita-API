import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/config/prisma.module";

@Module({
    imports: [PrismaModule],
    exports: [PrismaModule]
})
export class DatabaseModule {}