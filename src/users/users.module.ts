import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../entity/users.entity';
import { PersonModule } from '../person/person.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './jwt.constant';


@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), PersonModule,
    JwtModule.register({
      global: true,
      secret: JwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
}
