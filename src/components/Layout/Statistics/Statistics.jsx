import { groupNumber } from "../../../data";
import StatisticsChart from "../StatisticsChart/StatisticsChart";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from 'react-icons/bs';

const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>

            <div className={`${css.cards} grey-container`}>
                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>
                    <div className={css.card}>
                        <span>Top Item this month</span>
                        <span>Office comps</span>
                    </div>
                </div>
                <div className={css.card}>
                    <span>Profit</span>
                    <span>${groupNumber(37000)}</span>
                </div>
                <div className={css.card}>
                    <span>Average</span>
                    <span>${groupNumber(7000)}</span>
                </div>
                <div className={css.card}>
                    <span>Item</span>
                    <span>${groupNumber(3000)}</span>
                </div>
            </div>

            <StatisticsChart />
        </div>
    );
};

export default Statistics;
