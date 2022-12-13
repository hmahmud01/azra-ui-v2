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
                                <Link className="waves-effect waves-dark has-arrow" href=""><i className="far fa-window-restore"></i> <span className="hide-menu">User </span></Link>
                                <ul aria-expanded="false" className="collapse"> 
                                    <li>
                                        <Link href="/dealer">Dealer</Link>
                                    </li>  
                                    <li>
                                        <Link href="/subdealer">Sub Dealer</Link>
                                    </li>  
                                    
                                    <li>
                                        <Link href="/agent">Agent</Link>
                                    </li>                    
                                </ul>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark has-arrow" href=""><i className="far fa-window-restore"></i> <span className="hide-menu">National </span></Link>
                                <ul aria-expanded="false" className="collapse"> 
                                    <li>
                                        <Link href="/country">Country</Link>
                                    </li>
                                    <li>
                                        <Link href="/circle">Circle</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark has-arrow" href=""><i className="far fa-window-restore"></i> <span className="hide-menu">Network </span></Link>
                                <ul aria-expanded="false" className="collapse"> 
                                    <li>
                                        <Link href="/service">Service</Link>
                                    </li>        
                                    <li>
                                        <Link href="/aggregator">Aggregator</Link>
                                    </li>
                                    <li>
                                        <Link href="/mno">MNO</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark" href="/indexapi"><i className="fas fa-cogs"></i> <span className="hide-menu">Api Index </span></Link>
                            </li>
                            <li>
                                <Link className="waves-effect waves-dark" href="/simulator"><i className="fas fa-cogs"></i> <span className="hide-menu">Simulator </span></Link>
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