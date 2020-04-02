import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const UserList = ({users}) => {
    return(
        <ul>
            {users.forEach(user => (
                <li>blablabla{user}</li>
            )
        )}
        </ul>
        
    )
}

export default UserList