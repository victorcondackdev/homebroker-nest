import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { Wallet, WalletSchema } from './entities/wallet.entity';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { WalletAsset, WalletAssetSchema } from './entities/wallet-asset.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
          { 
            name: Wallet.name,
            schema: WalletSchema,
          },
          { 
            name: WalletAsset.name,
            schema: WalletAssetSchema,
          },
        ])
      
  ],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
