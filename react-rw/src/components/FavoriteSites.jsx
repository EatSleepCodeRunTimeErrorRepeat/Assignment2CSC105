
function FavoriteSites(){
    return(
        <section style={{
            margin: "20px",
            }}>
            <h2 style={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
            }}>
                Favorite Sites</h2>
            <ul style={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                listStyle: "none",
                padding: "0",
                margin: "0",
            }}>   
            <li><a href="/https://www.google.com/">Google</a>      </li>
            <li><a href="https://github.com/">Github</a>           </li>
            <li><a href="/https://www.youtube.com/">VSCode</a>     </li>
            <li><a href="/https://www.google.com/">Instagram</a>   </li>
            <li><a href="/https://www.google.com/">Facebook</a>    </li>
            </ul>
            <style jsx>{`
                li {
                    margin: 10px 0;
                    }

                a {
                    color: lightgreen;
                    text-decoration: none;
                }

                a:hover {
                    color: red;
                }

                a:visited {
                    color: lightgreen;
                }
            `}</style>
            </section>
    )
}
export default FavoriteSites;