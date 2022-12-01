import Link from "next/link";

export default function BreadCrumb(props){
    return (
        <div class="row page-titles">
            <div class="col-md-5 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{ props.title }</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li class="breadcrumb-item active">{ props.title }</li>
                </ol>
            </div>
        </div>
    )
}