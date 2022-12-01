import Link from "next/link";

export default function SideBar() {
    return (
        <div>
            <aside className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li>
                                <Link className="waves-effect waves-dark" href="/"><i className="fas fa-cog"></i> <span className="hide-menu">Sample </span></Link>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark has-arrow" href=""><i className="far fa-window-restore"></i> <span className="hide-menu">UL sample </span></Link>
                                <ul aria-expanded="false" className="collapse"> 
                                    <li>
                                        <Link href="">TEST</Link>
                                    </li>        
                                    <li>
                                        <Link href="">TEST</Link>
                                    </li>                      
                                </ul>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark" href=""><i className="fas fa-cogs"></i> <span className="hide-menu">Sample 2 </span></Link>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark" href="/test"><i className="fas fa-cogs"></i> <span className="hide-menu">Test Component </span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar-footer">
                    <Link href="/" className="link"><i className="ti-settings"></i></Link>
                    <Link href="/" className="link"><i className="mdi mdi-gmail"></i></Link>
                    <Link href="/" className="link"><i className="mdi mdi-power"></i></Link>
                </div>
            </aside>
        </div>
        
    )
}