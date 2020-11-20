import classes from "./Users.module.css";
import React from "react";

let Users = (props) => {
    if (props.users.length===0) {
        props.setUsers(
        [
            {
                id: 1, photoURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fanime-characters-fight%2Fimages%2F8%2F8e%2FAnakin_Skywalker.png%2Frevision%2Flatest%3Fcb%3D20181217061059%26path-prefix%3Dru&imgrefurl=https%3A%2F%2Fanime-characters-fight.fandom.com%2Fru%2Fwiki%2F%25D0%25AD%25D0%25BD%25D0%25B0%25D0%25BA%25D0%25B8%25D0%25BD_%25D0%25A1%25D0%25BA%25D0%25B0%25D0%25B9%25D1%2583%25D0%25BE%25D0%25BA%25D0%25B5%25D1%2580&tbnid=uH_Or7s7-EI0qM&vet=12ahUKEwiu9OL0iZHtAhULB3cKHextBHIQMygAegUIARCzAQ..i&docid=fO-wIM6jWM1boM&w=700&h=700&q=enakin%20characters&ved=2ahUKEwiu9OL0iZHtAhULB3cKHextBHIQMygAegUIARCzAQ",
                followed: false, fullName: "Dmitriy", status: "I am a boss", location: { city: "Minsk", country: "Belarus" }
            },
            {
                id: 2, photoURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flumiere-a.akamaihd.net%2Fv1%2Fimages%2F5cb3c849d5de240001a05880-image_c6729179.jpeg%3Fregion%3D0%252C0%252C1536%252C864%26width%3D960&imgrefurl=https%3A%2F%2Fwww.starwars.com%2Fdatabank%2Fahsoka-tano&tbnid=eJ0kaJIED87APM&vet=12ahUKEwjGucCLiZHtAhUOiYsKHcjrB8cQMygtegUIARD8AQ..i&docid=IglI7lYlYehcKM&w=960&h=540&q=asoka%20characters&ved=2ahUKEwjGucCLiZHtAhUOiYsKHcjrB8cQMygtegUIARD8AQ",
                followed: false, fullName: "Anna", status: "I am a boss", location: { city: "London", country: "England" }
            },
            {
                id: 3, photoURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fgeekspin.co%2Fwp-content%2Fuploads%2F2019%2F12%2Fbaby-yoda-backstory-758x348.jpg&imgrefurl=https%3A%2F%2Fgeekspin.co%2Fthe-mandalorian-will-reveal-baby-yodas-origins-this-season%2F&tbnid=ERrxaN62j-mwLM&vet=10CBcQMyhvahcKEwjooOX-iJHtAhUAAAAAHQAAAAAQAg..i&docid=7MDhHS2fJ98GnM&w=758&h=348&q=mandalorian%20characters&ved=0CBcQMyhvahcKEwjooOX-iJHtAhUAAAAAHQAAAAAQAg",
                followed: true, fullName: "Igor", status: "I am a boss", location: { city: "Kiev", country: "Ukraine" }
            },
            {
                id: 4, photoURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblogmickey.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fthe-mandalorian-press-header.png&imgrefurl=https%3A%2F%2Fblogmickey.com%2F2020%2F02%2Fthe-mandalorian-character-meet-and-greet-coming-soon-to-disney-parks%2F&tbnid=UMpQZlMT0SiDlM&vet=12ahUKEwiXxa7fiJHtAhVDsioKHUYlCaQQMyg_egQIARBU..i&docid=KtN5rxJulXbVZM&w=1667&h=938&q=mandalorian%20characters&ved=2ahUKEwiXxa7fiJHtAhVDsioKHUYlCaQQMyg_egQIARBU",
                followed: true, fullName: "Taras", status: "I am a boss", location: { city: "Lviv", country: "Ukraine" }
            },
        ]
    )
    }
    
    return (
        props.users.map (u => <div key ={u.id}> 
            <div className={classes.main}>
                <div className={classes.avaButt}>
                    <div className={classes.ava}>
                        <img src={u.photoURL} className={classes.photo} />
                    </div>
                    <div className={classes.butt}>{u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div> 
                </div>
                <div className={classes.info}>
                    <div className={classes.info__name}>
                        <div className={classes.info__item}>FullName</div>
                        <div className={classes.info__item}>Status</div>
                    </div>
                    <div className={classes.info__location}>
                        <div className={classes.info__item}>Country</div>
                        <div className={classes.info__item}>City</div>
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default Users;