import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputRow,
    InputDatePickerColumn,
    InputTextAreaColumn,
    InputFileColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";

const AddImportLicense = () => {
    const pageUtils = new PageUtils();
    const { addExportLicensesPage: strings } = useLocale();

    return (
        <FormPage pageUtils={pageUtils}>
            <h4>{strings.exportDeclaration}</h4>
            <InputRow>
                <InputTextColumn field="entrycustoms" textAlign="right" />
                <InputTextColumn
                    field="customsCode"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="cottage"
                    textAlign="right"
                    type="number"
                />
                <InputDatePickerColumn />
            </InputRow>
            <InputRow>
                <InputTextColumn field="contents" textAlign="right" />
                <InputTextColumn
                    field="items"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="numOfPackages"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <h4>{strings.inflection}</h4>
            <InputRow>
                <InputTextColumn
                    field="archiveNo"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="manifest"
                    textAlign="right"
                    type="number"
                />
                <InputDatePickerColumn />
            </InputRow>
            <InputRow>
                <InputTextColumn field="exporter" textAlign="right" />
                <InputTextColumn field="productOwner" textAlign="right" />
                <InputTextColumn
                    field="componentsOfValue"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="valueComponentCode"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <InputRow>
                <InputTextColumn
                    field="declarantsRepresentative"
                    textAlign="right"
                />
                <InputTextColumn
                    field="phone"
                    textAlign="right"
                    type="number"
                />
                <InputTextAreaColumn
                    field="address"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <InputRow>
                <InputTextColumn field="workRights" textAlign="right" />
                <InputTextColumn
                    field="phone"
                    textAlign="right"
                    type="number"
                />
                <InputTextAreaColumn
                    field="address"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            {/* 15-17 ، 12 */}
            <InputRow>
                <InputTextColumn field="destinationCountry" textAlign="right" />
                <InputTextColumn field="exportingCountry" textAlign="right" />
                <InputTextColumn
                    field="countryOfTransaction"
                    textAlign="right"
                />
                <InputTextColumn
                    field="freightNumber"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            {/* 18-21 */}
            <InputRow>
                <InputTextColumn
                    field="identityNationalityTransportArrival"
                    textAlign="right"
                />
                <InputTextColumn field="country" textAlign="right" />
                <InputTextColumn field="FOBdeliveryTerms" textAlign="right" />
                <InputTextColumn
                    field="identityNationalityTransportCrossing"
                    textAlign="right"
                />
            </InputRow>
            {/* 22-24 */}
            <InputRow>
                <InputTextColumn field="currency" textAlign="right" />
                <InputTextColumn
                    field="totalInvoiceAmount"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="exchangeRate"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn field="transactionType" textAlign="right" />
            </InputRow>
            {/* 25-27 */}
            <InputRow>
                <InputTextColumn field="typeTransport" textAlign="right" />
                <InputTextColumn
                    field="shippingCode"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn field="placeOfDischarge" textAlign="right" />
                <InputTextColumn
                    field="ProvinceCode"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            {/* 28 */}
            <InputRow>
                <InputTextColumn
                    field="financialBankingInfo"
                    textAlign="right"
                />
                <InputTextColumn
                    field="bankCode"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn field="paymentTerms" textAlign="right" />
                <InputTextColumn field="bankName" textAlign="right" />
            </InputRow>
            {/* 28-30 */}
            <InputRow>
                <InputTextColumn
                    field="branch"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="DocumentaryCreditNum"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn field="exitCustoms" textAlign="right" />
                <InputTextColumn
                    field="placeOfProductEvaluation"
                    textAlign="right"
                />
            </InputRow>
            {/* 31 */}
            <InputRow>
                <InputTextColumn
                    field="orderRegistrationCode"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn field="brandType" textAlign="right" />
                <InputTextColumn field="productModel" textAlign="right" />
            </InputRow>
            {/* 31 */}
            <InputRow>
                <InputTextAreaColumn
                    field="descriptionOfGoods"
                    textAlign="right"
                />
                <InputTextAreaColumn
                    field="commercialDescriptionOfGoods"
                    textAlign="right"
                />
            </InputRow>
            {/* 32-33 */}
            <InputRow>
                <InputTextColumn
                    field="ticketNum"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="productCode"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            {/* 34 */}
            <InputRow>
                <InputTextColumn
                    field="manufacturingCountry"
                    textAlign="right"
                />
                <InputTextColumn
                    field="insurance"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="rent"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            {/* 35-38 */}
            <InputRow>
                <InputTextColumn
                    field="grossWeight"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="source"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="netWeight"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            {/* 41-43 */}
            <InputRow>
                <InputTextColumn
                    field="NumOfUnitsOfGoods"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="itemValue"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="cloudy"
                    textAlign="right"
                />
            </InputRow>
            {/* 44 */}
            <InputRow>
                <InputTextColumn
                    field="discountPercent"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="interestRate"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="salaryRate"
                    textAlign="right"
                    type="number"
                />
                <InputFileColumn
                    field="attachedDocuments"
                />
            </InputRow>
            {/* 45-49 */}
            <InputRow>
                <InputTextColumn
                    field="adjustmentRate"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="customsValueOfItem"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="creditAccountCode"
                    textAlign="right"
                    type="number"
                />
               <InputTextAreaColumn
               field="warehouseInfo"
               textAlign="right"
               />
            </InputRow>
        </FormPage>
    );
};

export default AddImportLicense;    
