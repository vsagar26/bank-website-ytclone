import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat)=>(
        <div id={stat.id} className={`flex-1 flex flex-row justify-start items-center m-3`}>
          <h4 className={`font-poppins font-semibold text-[30.89px] sm:text-[40.89px] text-white leading-[43.16px] sm:leading-[53.16px]`}>
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats