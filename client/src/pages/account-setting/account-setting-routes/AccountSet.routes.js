import React from "react";
import AccountNav from "./accountSet-nav/AccountSetNav";
import { AccountSetContainer } from "./accountSet.style";
import { Switch, Route } from "react-router-dom";
import { changePassword } from "../../../redux/user/user.actions";
import GeneralDetails from "./general-details/GeneralDetails";
import { MangeContent } from "./general-details/generalDetails.style";
import Privacy from "./privacy/Privacy";
import { connect } from "react-redux";

const AccountSetRoutes = ({ match, changePassword }) => {
  return (
    <AccountSetContainer>
      <AccountNav />
      <MangeContent>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => <GeneralDetails />}
          />
          <Route
            exact
            path={`${match.path}/privacy`}
            render={() => <Privacy changePassword={changePassword} />}
          />
        </Switch>
      </MangeContent>
    </AccountSetContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  changePassword: (pass, newPass) => dispatch(changePassword(pass, newPass)),
});

export default connect(null, mapDispatchToProps)(AccountSetRoutes);
