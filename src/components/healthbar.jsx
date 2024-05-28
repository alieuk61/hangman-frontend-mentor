import HeartIcon from "../assets/images/icon-heart";
import '../scss/components/_healthbar.scss';

export default function HealthBar () {

    return(
        <div className="healthbar__div">
            <input type="range" />
            <HeartIcon />

        </div>
    )
}