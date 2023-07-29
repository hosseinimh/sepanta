import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Navigate, Route } from "react-router";

import * as Pages from "../Pages";
import utils from "../../utils/Utils";
import { BASE_PATH, USER_ROLES } from "../../constants";

function AuthRoute() {
  const userState = useSelector((state) => state.userReducer);
  const lsUser = utils.getLSUser();


  return (
    <Router>
      {userState.isAuthenticated && (
        <Routes>
          {lsUser?.role === USER_ROLES.ADMINISTRATOR && (
            <>
             <Route
                path={`${BASE_PATH}/villages`}
                element={<Pages.Villages />}
              />EditVillage
              <Route
                path={`${BASE_PATH}/villages/add`}
                element={<Pages.AddVillage />}
              />
               <Route
                path={`${BASE_PATH}/villages/edit/:balanceId`}
                element={<Pages.EditVillage />}
              />
              <Route
                path={`${BASE_PATH}/banks`}
                element={<Pages.Banks />}
              />
              <Route
                path={`${BASE_PATH}/banks/add`}
                element={<Pages.AddBank />}
              />
               <Route
                path={`${BASE_PATH}/banks/edit/:balanceId`}
                element={<Pages.EditBank />}
              />
               <Route
                path={`${BASE_PATH}/relationships`}
                element={<Pages.Relationships />}
              />
              <Route
                path={`${BASE_PATH}/relationships/add`}
                element={<Pages.AddRelationship />}
              />
               <Route
                path={`${BASE_PATH}/relationships/edit/:balanceId`}
                element={<Pages.EditRelationship />}
              />
               <Route
                path={`${BASE_PATH}/countries`}
                element={<Pages.Countries />}
              />
                <Route
                path={`${BASE_PATH}/countries/add`}
                element={<Pages.AddCountry />}
              />
               <Route
                path={`${BASE_PATH}/countries/edit/:balanceId`}
                element={<Pages.EditCountry />}
              />
               <Route
                path={`${BASE_PATH}/export_License`}
                element={<Pages.ExportLicenses />}
              />
               <Route
                path={`${BASE_PATH}/export_License/add`}
                element={<Pages.AddExportLicense />}
              />
               <Route
                path={`${BASE_PATH}/export_License/edit/:balanceId`}
                element={<Pages.AddExportLicense />}
              />
               <Route
                path={`${BASE_PATH}/import_License`}
                element={<Pages.ImportLicenses />}
              />
               <Route
                path={`${BASE_PATH}/import_License/add`}
                element={<Pages.AddExportLicense />}
              />
               <Route
                path={`${BASE_PATH}/import_License/edit/:balanceId`}
                element={<Pages.AddExportLicense />}
              />
               <Route
                path={`${BASE_PATH}/shareholders`}
                element={<Pages.Shareholders />}
              />
               <Route
                path={`${BASE_PATH}/shareholders/add`}
                element={<Pages.AddShareholder />}
              />
               <Route
                path={`${BASE_PATH}/shareholders/edit/:balanceId`}
                element={<Pages.EditShareholder />}
              />
               <Route
                path={`${BASE_PATH}/shareholders/relationship-shareholder/:balanceId`}
                element={<Pages.ShareholderRelationships />}
              />
               <Route
                path={`${BASE_PATH}/shareholders/relationship-shareholder/add`}
                element={<Pages.AddShareholderRelationship />}
              />
               <Route
                path={`${BASE_PATH}/shareholders/relationship-shareholder/edit/:balanceId`}
                element={<Pages.EditShareholderRelationship />}
              />
              <Route
                path={`${BASE_PATH}/app_rules/add`}
                element={<Pages.AddAppRule />}
              />
              <Route
                path={`${BASE_PATH}/app_rules/admin`}
                element={<Pages.AppRulesAdmin />}
              />
              <Route
                path={`${BASE_PATH}/app_rules/edit/:appRuleId`}
                element={<Pages.EditAppRule />}
              />
              <Route
                path={`${BASE_PATH}/campaigns/add`}
                element={<Pages.AddCampaign />}
              />
              <Route
                path={`${BASE_PATH}/campaigns/edit/:campaignId`}
                element={<Pages.EditCampaign />}
              />
              <Route
                path={`${BASE_PATH}/campaigns`}
                element={<Pages.Campaigns />}
              />
              <Route
                path={`${BASE_PATH}/users/change_password/:userId`}
                element={<Pages.ChangePasswordUser />}
              />
              <Route
                path={`${BASE_PATH}/users/add`}
                element={<Pages.AddUser />}
              />
              <Route
                path={`${BASE_PATH}/users/edit/:userId`}
                element={<Pages.EditUser />}
              />
              <Route path={`${BASE_PATH}/users`} element={<Pages.Users />} />
              <Route
                path={`${BASE_PATH}/tickets/add/:userId`}
                element={<Pages.AddTicket />}
              />
              <Route
                path={`${BASE_PATH}/tickets/:userId`}
                element={<Pages.Tickets />}
              />
              <Route
                path={`${BASE_PATH}/challenge_balances/add`}
                element={<Pages.AddChallengeBalance />}
              />
              <Route
                path={`${BASE_PATH}/challenge_balances/edit/:balanceId`}
                element={<Pages.EditChallengeBalance />}
              />
              <Route
                path={`${BASE_PATH}/challenge_balances`}
                element={<Pages.ChallengeBalances />}
              />
              <Route
                path={`${BASE_PATH}/challenge_leverages/add`}
                element={<Pages.AddChallengeLeverage />}
              />
              <Route
                path={`${BASE_PATH}/challenge_leverages/edit/:leverageId`}
                element={<Pages.EditChallengeLeverage />}
              />
              <Route
                path={`${BASE_PATH}/challenge_leverages`}
                element={<Pages.ChallengeLeverages />}
              />
              <Route
                path={`${BASE_PATH}/challenge_servers/add`}
                element={<Pages.AddChallengeServer />}
              />
              <Route
                path={`${BASE_PATH}/challenge_servers/edit/:serverId`}
                element={<Pages.EditChallengeServer />}
              />
              <Route
                path={`${BASE_PATH}/challenge_servers`}
                element={<Pages.ChallengeServers />}
              />
              <Route
                path={`${BASE_PATH}/challenge_rules/edit`}
                element={<Pages.EditChallengeRule />}
              />
              <Route
                path={`${BASE_PATH}/challenge_rules`}
                element={<Pages.ChallengeRules />}
              />
              <Route
                path={`${BASE_PATH}/challenge_platforms/add`}
                element={<Pages.AddChallengePlatform />}
              />
              <Route
                path={`${BASE_PATH}/challenge_platforms/edit/:platformId`}
                element={<Pages.EditChallengePlatform />}
              />
              <Route
                path={`${BASE_PATH}/challenge_platforms`}
                element={<Pages.ChallengePlatforms />}
              />
              <Route
                path={`${BASE_PATH}/challenges/edit/:challengeId`}
                element={<Pages.EditChallenge />}
              />
            </>
          )}
          {lsUser?.role === USER_ROLES.USER && (
            <>
              <Route
                path={`${BASE_PATH}/app_rules`}
                element={<Pages.AppRulesUser />}
              />
              <Route
                path={`${BASE_PATH}/challenges/take/free`}
                element={<Pages.TakeFreeChallenge />}
              />
              <Route
                path={`${BASE_PATH}/users/verify_request`}
                element={<Pages.VerifyUserRequest />}
              />
            </>
          )}
          <Route
            path={`${BASE_PATH}/tickets/add`}
            element={<Pages.AddTicketCurrentUser />}
          />
          <Route
            path={`${BASE_PATH}/tickets`}
            element={<Pages.TicketsCurrentUser />}
          />
          <Route
            path={`${BASE_PATH}/tickets/threads/:ticketId`}
            element={<Pages.TicketThreads />}
          />
          <Route
            path={`${BASE_PATH}/challenges`}
            element={<Pages.Challenges />}
          />
          <Route
            path={`${BASE_PATH}/challenges/analyze/:challengeId`}
            element={<Pages.AnalyzeChallenge />}
          />
          <Route
            path={`${BASE_PATH}/users/edit`}
            element={<Pages.EditCurrentUser />}
          />
          <Route
            path={`${BASE_PATH}/users/change_password`}
            element={<Pages.ChangePasswordCurrentUser />}
          />
          <Route path={`${BASE_PATH}`} element={<Pages.Dashboard />} />
          <Route path="*" element={<Navigate to={BASE_PATH} />} />
        </Routes>
      )}
      {!userState.isAuthenticated && (
        <Routes>
          <Route
            path={`${BASE_PATH}/users/login`}
            exact={true}
            element={<Pages.Login />}
          />
          <Route
            path={`${BASE_PATH}/users/forgot`}
            exact={true}
            element={<Pages.ForgotPassword />}
          />
          <Route
            path={`${BASE_PATH}/users/signup`}
            exact={true}
            element={<Pages.Signup />}
          />
          <Route
            path="*"
            element={<Navigate to={`${BASE_PATH}/users/login`} />}
          />
        </Routes>
      )}
    </Router>
  );
}

export default AuthRoute;
