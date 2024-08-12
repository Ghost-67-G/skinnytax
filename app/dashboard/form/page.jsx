'use client';
import React, { Fragment, useState } from 'react';
import FormProgressStepper from '@/components/FormProgressStepper';
import Instructionbox from '@/components/Instructionbox';;
import FormSidebar from '@/components/dashboard/formSidebar'
import PersonalInformationPart1Form from '@/components/dashboard/personalInformationPart1Form';
import PersonalInformationPart2Form from '@/components/dashboard/personalInformationPart2Form';
import PersonalInformationPart3Form from '@/components/dashboard/personalInformationPart3Form';
import FinancialInformationPart1Form from '@/components/dashboard/financialInformationPart1Form';
import { toast } from 'react-toastify';

const parts = {
  part_one: { 'step-1': ['Information about you (S1)', 'Information about your spouse (S2)', 'Other information'], 'step-2': ['Children and family', 'Other information'], 'step-3': ["For Married Couples Only"] },
  part_two: { 'step-1': ['Bank, Savings, Loans and Credit Unions', 'Stocks or Bonds', 'Mutual Funds and /or Brokerage Accounts'], 'step-2': ['Promissory Notes & Trust Deeds Owed to You'], 'step-3': ["Real Estate", 'IRA', 'Life Insurance'], 'step-4': ["Non-Qualified Annuities", 'Limited or General Partnerships', 'Businesses'], 'step-5': ['Other Assets', 'Miscellaneous Information'] },
}
function InputForm() {
  const [partNumber, setPartNumber] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(1);

  const handleNext = () => {
    if (partNumber === 0) {
      if (completedSteps === 2) {
        setCompletedSteps(0)
        setPartNumber(1)
      } else {
        setCompletedSteps(completedSteps + 1)
      }
    } else if (partNumber === 1) {
      if (completedSteps === 2) {
        toast.success('Form Submitted Successfully')
        setCompletedSteps(0)
        setPartNumber(0)
      } else {
        setCompletedSteps(completedSteps + 1)
      }
    }
  }
  return (
    <div className="dashboardform-page">
      <div className="container">
        <Instructionbox />
        <div className="form-dashboard-inner">
          <FormSidebar parts={parts} setPartNumber={setPartNumber} setStepNumber={setStepNumber} partNumber={partNumber} stepNumber={stepNumber} completedSteps={completedSteps} />
          <div className="form-dashboard">
            <div className="progress-bar-main-wrapper">
              <FormProgressStepper formNumber={completedSteps} />
            </div>
            {

              partNumber === 0 ? (
                (completedSteps === 0) ?
                  <PersonalInformationPart1Form handleNext={handleNext} /> :
                  (completedSteps === 1) ?
                    <PersonalInformationPart2Form handleNext={handleNext} /> :
                    (completedSteps === 2) ?
                      <PersonalInformationPart3Form handleNext={handleNext} /> :
                      null
              ) : partNumber === 1 ? (
                completedSteps === 0 ?
                  <FinancialInformationPart1Form handleNext={handleNext} /> :
                  completedSteps === 1 ?
                    <FinancialInformationPart1Form handleNext={handleNext} /> :
                    completedSteps === 2 ?
                      <FinancialInformationPart1Form handleNext={handleNext} /> :
                      null
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
