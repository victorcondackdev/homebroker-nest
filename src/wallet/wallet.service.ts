import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';

@Injectable()
export class WalletService {
  constructor (@InjectModel(Wallet.name) private walletSchema: Model<Wallet>){
  
    }
    create(createWalletDto: CreateWalletDto) {
      return this.walletSchema.create(createWalletDto);
      }
  
    findAll() {
      return this.walletSchema.find();
    }
  
    findOne(symbol: string) {
      return  this.walletSchema.findOne({symbol});
    }
  
    update(id: number, updateWalletDto: UpdateWalletDto) {
      return `This action updates a #${id} wallet`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} wallet`;
    }
}
