import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import axios from "axios"
import swal from 'sweetalert'

//components
import UserList from "./usersList"

const Users = [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
    "User9",
    "User10"
]

const State = ["notStarted","ongoing", "finished"]
const RoundPart= ["Election", "Legislative Action", "Executive Action"]

class GameLogic extends React.Component {
    state = {
        state : State[0],
        roundPart : RoundPart[0],
        numberOfCards:{
            fascists:11,
            liberals:6,
        },
        hitler : "", //userID,
        liberals : [], //userIDs
        fascists : [], //userIDs
        chancelor:"", //userId
        president:"", //userId
        liberalsWin : {
            isHitlerAlive : true, // if false, Liberals Win
            liberalLaws : 0 // if == 5, Liberals Win
        },
        fascistsWin : {
            isHitlerElected:false, // if true && fascistsLaws >= 3, fasciscts win
            fascistsLaws : 0 // if == 6, fascists win
        }

    }

    nominateChancelor = () => {

    }

    vote = () => {

    }

    distributeRoles = () => {
        let hitler, liberals, fascists, president
        let users = Users
        let nbFascists
        //getAllUsersId from DB
        
        if(users.length >= 5 && users.length < 11){
            switch(users.length) {
                case 5:
                    nbFascists = 1;
                    break;
                case 6:
                    nbFascists = 1;
                    break;
                case 7:
                    nbFascists = 2;
                    break;
                case 8:
                    nbFascists = 2;
                    break;
                case 9:
                    nbFascists = 3;
                    break;
                case 10:
                    nbFascists = 3;
                    break;
            }
            users.sort(() => Math.random() - 0.5)
            hitler = users.pop()
            users.sort(() => Math.random() - 0.5)
            president = users.pop()
            fascists = users.slice(0, nbFascists)
            liberals = users.slice(nbFascists)
            console.log({hitler,fascists,liberals,president})
            this.setState({liberals,hitler,fascists,president,state:State[1]})
        } else if (users.length < 5) {
            swal("Not enough players", "Please invite more players", "warning");
        }
     
    } 
    
    render(){
        
        return(
    <div>
        <UserList users={Users}/>
            {this.state.state === State[0] ?
            (<button onClick={this.distributeRoles}>Distribute the roles & Start Party</button>
            ):null}
        
    </div>)}
}

{/* Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
} */}

export default GameLogic