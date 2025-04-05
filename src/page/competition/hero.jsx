import ListCompetition from "./list-competition";
import PrizePool from "./prize-pool";
import Our_Partnership from "./our-partnership";
import Contact_Us from "./contact-us";
import { asset_competition } from "../../assets/images";

const Competition = () => {
  return (
    <>
      {asset_competition.map((asset, index) => {
        return (
          <>
            <div className="flex flex-col w-screen h-screen" key={index}>
              <img
                src={asset?.img_bg_hero}
                className="relative w-screen h-screen object-cover"
              />

              <div className="flex flex-col items-center w-full absolute z-10 top-28">
                <div className="flex flex-col items-center">
                  <img src={asset?.img_title_hero} />
                </div>
                <div>
                  <img src={asset?.img_astronot_hero} />
                </div>
                <div>
                  <svg
                    width="624"
                    height="122"
                    viewBox="0 0 624 122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="19.9878"
                      y="20.9397"
                      width="580"
                      height="100"
                      transform="rotate(-2 19.9878 20.9397)"
                      fill="#E6B62E"
                    />
                    <rect
                      x="10.6919"
                      y="41.2765"
                      width="600"
                      height="60"
                      transform="rotate(-2 10.6919 41.2765)"
                      fill="#E6B62E"
                    />
                    <rect
                      x="1.39597"
                      y="61.6133"
                      width="620"
                      height="20"
                      transform="rotate(-2 1.39597 61.6133)"
                      fill="#E6B62E"
                    />
                    <rect
                      x="589.641"
                      y="1.047"
                      width="10"
                      height="30"
                      transform="rotate(-2 589.641 1.047)"
                      fill="#FEDA76"
                    />
                    <rect
                      x="19.9878"
                      y="20.9397"
                      width="570"
                      height="10"
                      transform="rotate(-2 19.9878 20.9397)"
                      fill="#FEDA76"
                    />
                    <rect
                      x="600.333"
                      y="20.6858"
                      width="10"
                      height="20"
                      transform="rotate(-2 600.333 20.6858)"
                      fill="#FEDA76"
                    />
                    <rect
                      x="22.4308"
                      y="90.8971"
                      width="10"
                      height="30"
                      transform="rotate(-2 22.4308 90.8971)"
                      fill="#8B6E1C"
                    />
                    <rect
                      x="12.0879"
                      y="81.2521"
                      width="10"
                      height="20"
                      transform="rotate(-2 12.0879 81.2521)"
                      fill="#8B6E1C"
                    />
                    <rect
                      x="33.1227"
                      y="110.536"
                      width="570"
                      height="10"
                      transform="rotate(-2 33.1227 110.536)"
                      fill="#8B6E1C"
                    />
                    <path
                      d="M39.1464 80.7365L39.0307 77.4235L35.6008 77.5433L34.8331 55.5607L39.7831 55.3879L40.4813 75.3827L49.29 75.0751L48.5917 55.0802L53.5807 54.906L54.3484 76.8886L50.8795 77.0098L50.9952 80.3227L39.1464 80.7365ZM59.2012 80.0362L58.5506 61.4055L73.8293 60.872L73.9463 64.224L77.4152 64.1028L77.9488 79.3815L72.9598 79.5557L72.4943 66.2258L63.6857 66.5335L64.1512 79.8633L59.2012 80.0362ZM85.3545 79.1229L85.2388 75.8099L81.8089 75.9297L81.3911 63.964L84.821 63.8442L84.7039 60.4922L95.0716 60.1302L94.8389 53.4653L99.8278 53.291L100.595 75.2736L97.0876 75.3961L97.2033 78.7091L85.3545 79.1229ZM86.6895 73.769L95.4981 73.4614L95.2178 65.4323L86.4091 65.7399L86.6895 73.769ZM108.078 78.3294L107.962 75.0164L104.532 75.1362L104.115 63.1705L107.544 63.0507L107.427 59.6987L119.276 59.285L119.393 62.6369L122.862 62.5158L123.211 72.4937L126.679 72.3726L126.865 77.6733L121.876 77.8475L121.76 74.5346L119.811 74.6026L119.927 77.9156L108.078 78.3294ZM109.413 72.9755L118.222 72.6679L117.941 64.6388L109.133 64.9464L109.413 72.9755ZM130.455 77.548L129.804 58.9173L145.083 58.3838L145.2 61.7357L148.669 61.6146L149.202 76.8933L144.213 77.0675L143.748 63.7376L134.939 64.0452L135.405 77.3751L130.455 77.548ZM156.841 83.2996L156.725 79.9866L153.295 80.1064L153.11 74.8056L158.06 74.6328L158.176 77.9458L167.023 77.6368L166.86 72.9596L156.492 73.3217L156.375 69.9697L152.945 70.0895L152.645 61.4758L156.074 61.356L155.957 58.004L167.845 57.5889L167.962 60.9408L171.392 60.8211L172.043 79.4517L168.613 79.5715L168.728 82.8845L156.841 83.2996ZM157.826 67.9289L166.674 67.6199L166.51 62.9427L157.663 63.2517L157.826 67.9289ZM178.913 75.8558L178.797 72.5428L175.367 72.6626L174.949 60.6969L178.379 60.5771L178.262 57.2251L190.111 56.8114L190.228 60.1633L193.697 60.0422L194.045 70.0201L197.514 69.899L197.699 75.1997L192.71 75.3739L192.595 72.061L190.646 72.129L190.762 75.442L178.913 75.8558ZM180.248 70.5019L189.056 70.1943L188.776 62.1652L179.967 62.4728L180.248 70.5019ZM201.289 75.0744L200.639 56.4437L215.917 55.9102L216.035 59.2621L219.503 59.141L220.037 74.4197L215.048 74.5939L214.582 61.264L205.774 61.5716L206.239 74.9015L201.289 75.0744ZM236.007 73.862L235.891 70.549L232.461 70.6688L231.926 55.3511L236.876 55.1783L237.342 68.5081L246.15 68.2005L245.685 54.8707L250.674 54.6964L251.209 70.0141L247.74 70.1352L247.856 73.4482L236.007 73.862ZM256.062 73.1617L255.411 54.531L270.69 53.9975L270.807 57.3494L274.276 57.2283L274.809 72.507L269.82 72.6812L269.355 59.3513L260.546 59.6589L261.012 72.9888L256.062 73.1617ZM284.846 72.1565L284.73 68.8435L281.3 68.9633L280.95 58.9464L277.52 59.0662L277.335 53.7654L280.765 53.6456L280.532 46.9807L285.482 46.8078L285.715 53.4728L296.083 53.1107L296.268 58.4115L285.9 58.7736L286.181 66.8027L295.028 66.4937L294.911 63.1417L299.9 62.9675L300.087 68.3073L296.618 68.4284L296.733 71.7414L284.846 72.1565ZM307.641 71.3605L307.525 68.0475L304.095 68.1673L303.56 52.8496L308.51 52.6768L308.976 66.0066L317.785 65.699L317.319 52.3691L322.308 52.1949L322.843 67.5126L319.374 67.6337L319.49 70.9467L307.641 71.3605ZM327.696 70.6601L326.812 45.3646L331.762 45.1917L332.226 58.4826L334.136 58.4159L334.022 55.1419L340.921 54.901L340.804 51.549L345.793 51.3748L345.978 56.6756L342.509 56.7967L342.625 60.1097L335.726 60.3506L335.773 61.7148L342.672 61.4739L342.789 64.8258L346.258 64.7047L346.443 70.0055L341.454 70.1797L341.339 66.8667L334.44 67.1076L334.323 63.7557L332.413 63.8224L332.646 70.4873L327.696 70.6601ZM362.413 69.4478L362.297 66.1348L358.868 66.2546L358.217 47.6239L361.647 47.5042L361.53 44.1522L373.379 43.7384L373.496 47.0904L376.965 46.9693L377.265 55.583L372.276 55.7572L372.045 49.1313L363.236 49.4389L363.748 64.0939L372.557 63.7863L372.323 57.0824L377.312 56.9082L377.615 65.5999L374.146 65.721L374.262 69.034L362.413 69.4478ZM385.898 68.6277L385.782 65.3147L382.352 65.4345L381.934 53.4688L385.364 53.349L385.247 49.997L397.096 49.5833L397.213 52.9352L400.682 52.8141L401.03 62.792L404.499 62.6709L404.684 67.9716L399.695 68.1459L399.58 64.8329L397.631 64.9009L397.747 68.2139L385.898 68.6277ZM387.233 63.2738L396.041 62.9662L395.761 54.9371L386.952 55.2447L387.233 63.2738ZM407.894 67.8596L407.011 42.564L411.961 42.3911L412.425 55.682L414.334 55.6153L414.22 52.3413L421.119 52.1004L421.002 48.7485L425.991 48.5742L426.176 53.875L422.707 53.9961L422.823 57.3091L415.924 57.55L415.972 58.9142L422.87 58.6733L422.987 62.0253L426.456 61.9041L426.641 67.2049L421.653 67.3791L421.537 64.0661L414.638 64.307L414.521 60.9551L412.611 61.0218L412.844 67.6867L407.894 67.8596ZM430.617 67.066L430.084 51.7874L433.514 51.6676L433.397 48.3156L445.245 47.9019L445.362 51.2538L448.831 51.1327L449.015 56.3945L444.026 56.5687L443.91 53.2557L435.102 53.5633L435.567 66.8932L430.617 67.066ZM456.352 66.1674L456.236 62.8544L452.806 62.9742L452.389 51.0085L455.818 50.8887L455.701 47.5367L467.55 47.123L467.667 50.4749L471.136 50.3538L471.485 60.3317L474.953 60.2106L475.139 65.5113L470.15 65.6855L470.034 62.3726L468.085 62.4406L468.201 65.7536L456.352 66.1674ZM457.687 60.8135L466.496 60.5059L466.215 52.4768L457.407 52.7844L457.687 60.8135ZM478.729 65.386L478.078 46.7553L493.357 46.2218L493.474 49.5737L496.943 49.4526L497.476 64.7313L492.487 64.9055L492.022 51.5756L483.213 51.8832L483.679 65.2131L478.729 65.386ZM502.213 64.5659L501.563 45.9352L506.513 45.7624L507.163 64.393L502.213 64.5659ZM501.516 44.61L501.33 39.2703L506.28 39.0974L506.466 44.4372L501.516 44.61ZM514.588 64.1337L514.472 60.8207L511.042 60.9405L510.625 48.9748L514.054 48.855L513.937 45.5031L525.786 45.0893L525.903 48.4413L529.372 48.3201L529.721 58.2981L533.189 58.1769L533.375 63.4777L528.386 63.6519L528.27 60.3389L526.321 60.407L526.437 63.72L514.588 64.1337ZM515.923 58.7799L524.732 58.4723L524.451 50.4432L515.643 50.7508L515.923 58.7799ZM536.965 63.3523L536.314 44.7217L551.593 44.1881L551.71 47.5401L555.179 47.419L555.712 62.6976L550.723 62.8719L550.258 49.542L541.449 49.8496L541.915 63.1795L536.965 63.3523ZM559.688 62.5588L559.503 57.258L573.262 56.7776L573.214 55.4134L562.885 55.7741L562.768 52.4221L559.338 52.5419L559.155 47.2801L562.584 47.1603L562.467 43.8084L577.785 43.2735L577.97 48.5742L564.173 49.0561L564.219 50.3813L574.548 50.0206L574.665 53.3725L578.133 53.2514L578.32 58.5911L574.851 58.7123L574.967 62.0253L559.688 62.5588ZM582.94 55.0738L582.289 36.4431L587.239 36.2703L587.89 54.9009L582.94 55.0738ZM583.173 61.7387L582.988 56.4379L587.938 56.2651L588.123 61.5658L583.173 61.7387Z"
                      fill="#6A5415"
                    />
                  </svg>
                </div>
                <div className="pt-6">
                  <span className="font-medium text-2xl w-[619px] flex text-center">
                    Tunjukkan bakat dan kreativitas kamu di berbagai kompetisi
                    seru. Mari bergabung dan nantikan kejutannya!
                  </span>
                </div>
              </div>
            </div>
            <ListCompetition asset={asset} />
          </>
        );
      })}
      <div>
        <PrizePool />
        <Our_Partnership />
      </div>
      <div>
        <Contact_Us />
      </div>
    </>
  );
};

export default Competition;
