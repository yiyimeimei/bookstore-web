import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from "../adminComponents/NavBar";
import SideBar from "../adminComponents/SideBar";
import {getBook, getBooks} from "../services/bookService";
import {getUsers} from "../services/userService";
import AdminBookList from "../adminComponents/AdminBookList";
import AdminUserList from "../adminComponents/AdminUserList";
import AdminOrderList from "../adminComponents/AdminOrderList";
import AdminStatisticsList from "../adminComponents/AdminStatisticsList";

class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            users: [],
            personalInfo: {},
        }
    }

    handlePersonalInfo = data => {
        this.setState({
            personalInfo: data,
        }, () => {

        });
    };

    handleUsers = data => {
        this.setState({
            users: data,
        })
    };

    componentDidMount() {
        getUsers(this.handleUsers);
        getBooks(this.handleAllBooks);
        let userstr = localStorage.getItem("user");
        let user = JSON.parse(userstr);
        this.handlePersonalInfo(user);
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
    }

    renderPersonalInfo = () => (
        this.state.personalInfo.userIdentity === 4 ?
            (
                <>
                    <SideBar activeSection={0} identity={this.state.personalInfo.userIdentity}/>
                    <PersonalInfo info={this.state.personalInfo}/>
                </>
            )
            :
            (
                <>
                    <SideBar activeSection={0} identity={this.state.personalInfo.userIdentity}/>
                    <PersonalInfo info={this.state.personalInfo}/>
                    <ConcernedMatches matches={this.state.concernedMatches} identity={this.state.personalInfo.userIdentity}/>
                </>
            )
    );

    renderMatchList = () => (
        <>
            <SideBar activeSection={2} identity={this.state.personalInfo.userIdentity}/>
            <MatchList identity={this.state.personalInfo.userIdentity}
                       matches={this.state.availableMatches}
                       concernedMatches={this.state.concernedMatches}
            />
        </>
    );

    renderSchedule = () => (
        <>
            <SideBar activeSection={1} identity={this.state.personalInfo.userIdentity}/>
            <PersonalSchedule matches={this.state.concernedMatches}/>
        </>
    );

    renderRegistration = () => (
        <>
            <SideBar activeSection={3} identity={this.state.personalInfo.userIdentity}/>
            <Referee_grade identity={this.state.personalInfo}/>
        </>

    );

    renderNewsEditor = () => (
        this.state.personalInfo.userIdentity === 3 ?
            (
                <>
                    <SideBar activeSection={3} identity={this.state.personalInfo.userIdentity}/>
                    <NewsEditList/>
                </>
            ) :
            (
                <Redirect to={"/console"}/>
            )
    );*/


    handleAllBooks = data => {
        console.log("getBooks");
        console.log(data);
        this.setState({
            books: data,
        });
    };

    renderAllBooks = () => (
        <>
            <SideBar activeSection={0}/>
            <AdminBookList />
        </>
    );

    renderAllUsers = () => (
        <>
            <SideBar activeSection={1} />
            <AdminUserList />
        </>
    );
    renderAllOrders = () => (
        <>
            <SideBar activeSection={2} />
            <AdminOrderList />
        </>
    );
    renderStatistics = () => (
        <>
            <SideBar activeSection={3}/>
            <AdminStatisticsList />
        </>
    );

    /*renderUploadButtons = () => (
        <>
            <SideBar activeSection={5} identity={this.state.personalInfo.userIdentity}/>
            <h1 className="sub-header">请上传信息</h1>
            <JudgeUpload />
            <br />
            <AthleteUpload />
        </>
    );

    renderJournalist = () => (
        <>
            <SideBar activeSection={4} identity={this.state.personalInfo.userIdentity}/>
            <Journalist/>
        </>
    );

    renderNewPaper = () => (
        <>
            <SideBar activeSection={5} identity={this.state.personalInfo.userIdentity}/>
            <NewPaper/>
        </>
    );

    renderSuccessPage= () => (
        <>
            <SideBar activeSection={5} identity={this.state.personalInfo.userIdentity}/>
            <SuccessView/>
        </>
    );


    renderAllManagers = () => (
        <>
            <SideBar activeSection={2} identity={this.state.personalInfo.userIdentity}/>
            <ManagerList />
        </>
    );*/

    render() {
        let userType = this.state.personalInfo.userType;
        if(userType === 0)
        {
            return (
                <div>
                    <NavBar />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                                <Router>
                                    <Switch>
                                        {/*<Route exact path={"/console/score/:matchId"} render={(props) => <ScoreList
                                        identity={this.state.personalInfo.userIdentity} {...props}/>}/>
                                    <Route exact path={"/console/judgeList/:matchId"}
                                           render={(props) => <JudgeList
                                               identity={this.state.personalInfo.userIdentity} {...props}/>}/>*/}
                                        <Route exact path={"/admin/book"}>{this.renderAllBooks()}</Route>
                                        <Route path={"/admin/user"}>{this.renderAllUsers()}</Route>
                                        <Route path={"/admin/order"}>{this.renderAllOrders()}</Route>
                                        <Route path={"/admin/statistics"}>{this.renderStatistics()}</Route>
                                        <Redirect from={'/*'} to={{pathname: "/admin/book"}}/>
                                    </Switch>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <p>
                    很抱歉，您没有权限访问此页面。
                </p>
            );
        }
    }
}

export default AdminView;