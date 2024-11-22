import { Test, TestingModule } from '@nestjs/testing';
import { WelcomeController } from './welcome.controller';
import { WelcomeService } from './welcome.service';

describe('WelcomeController', () => {
  let appController: WelcomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WelcomeController],
      providers: [WelcomeService],
    }).compile();

    appController = app.get<WelcomeController>(WelcomeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHelloV1()).toBe('Hello World! version #1');
      expect(appController.getHelloV2()).toBe('Hello World! version #2');
    });
  });
});
