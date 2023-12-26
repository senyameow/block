import { Module } from '@nestjs/common';
import { DbService } from './db.service';

@Module({
  providers: [DbService],
  // since we want to use across the whole app we need to specify exports
  exports: [DbService]
})
export class DbModule { }
