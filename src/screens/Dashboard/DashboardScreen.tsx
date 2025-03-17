// components
import Box from '../../components/Common/Box';
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';

const DashboardScreen: React.FC = () => (
  <SiteLayout>
    <Header icon='sort' title='Deposit / Withdraw' />
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <BankProcess />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important information</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; For EFT transfers, the recipient/beneficiary section must include "Crypto
              Exchange."
            </p>
            <p>
              &bull; You can make Transfer/EFT transactions from all your individual, non-term,
              Turkish Lira accounts opened in your name to the listed accounts. Transfers from
              accounts belonging to other individuals will not be accepted.
            </p>
            <p>
              &bull; Transfers made using ATMs (with or without a card) will not be accepted as it
              is not possible to verify the sender's information.
            </p>
            <p>
              &bull; The amount you send will be automatically reflected in your account after
              checks, and no additional notification is required.
            </p>
            <p>
              &bull; Since you have completed your identity verification, you do not need to enter a
              fixed deposit code in the description section.
            </p>
          </div>
        </Box>
      </div>
    </div>
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <RecentActivity />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important information</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; You can make withdrawals from all the bank accounts opened in your name
              (individual, non-term, TL). Transfers to another person will not be processed.
            </p>
            <p>&bull; The minimum withdrawal amount is 10 TL.</p>
            <p>&bull; A processing fee of 3 TL will be charged for withdrawal transactions.</p>
            <p>
              &bull; When you issue a withdrawal instruction, the amount will be deducted from your
              available balance.
            </p>
            <p>
              &bull; You can cancel any instructions that have not been processed yet. In this case,
              the instruction amount will be returned to your available balance.
            </p>
            <p>
              &bull; Withdrawal instructions given outside of bank working hours will be processed
              once the banks begin their working hours.
            </p>
          </div>
        </Box>
      </div>
    </div>
  </SiteLayout>
);

export default DashboardScreen;
