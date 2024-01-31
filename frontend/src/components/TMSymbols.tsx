import React, { FC, JSX } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const Lozenge: FC<SvgIconProps> = (props): JSX.Element =>
    <SvgIcon viewBox={"0 0 20 20"} {...props}>
        <path
            d="m9.9219 2.8351-9.525 5.4993v3.175l9.525 5.4993 9.525-5.4993v-3.175zm0 3.7261 5.8208 3.3607-5.8208 3.3607-5.8208-3.3607z" />
    </SvgIcon>;
Lozenge.displayName = 'Lozenge';

export const Pound: FC<SvgIconProps> = (props): JSX.Element =>
    <SvgIcon viewBox={"0 0 20 20"} {...props}>
        <path
            d="m6.6163 1.3229-.91626 3.9688h-3.8479v3.175h3.1149l-.67192 2.9104h-3.5013v3.175h2.7683l-.91626 3.9688h3.7025l.91626-3.9688h2.9121l-.91626 3.9688h3.7042l.91626-3.9688h3.3171v-3.175h-2.5841l.67192-2.9104h3.2351v-3.175h-2.5021l.91626-3.9688h-3.7042l-.91626 3.9688h-2.9121l.91626-3.9688zm2.0532 7.1438h2.9121l-.67192 2.9104h-2.9121z" />
    </SvgIcon>;
Pound.displayName = 'Pound';

export const Slash: FC<SvgIconProps> = (props): JSX.Element =>
    <SvgIcon viewBox={"0 0 20 20"} {...props}>
        <path d="m12.241 1.3229h5.2917l-9.9292 17.198h-5.2917z" />
    </SvgIcon>;
Slash.displayName = 'Slash';

export const Currency: FC<SvgIconProps> = (props): JSX.Element =>
    <SvgIcon viewBox={"0 0 20 20"} {...props}>
        <path
            d="m15.535 1.5029-2.8549 2.8549c-1.7292-.84478-3.7865-.84477-5.5155 0l-2.8549-2.8549-2.8063 2.8063 2.8553 2.8553c-.84423 1.7289-.84423 3.7858 0 5.5147l-2.8553 2.8553 2.8063 2.8063 2.8549-2.8549c1.729.84477 3.7863.84478 5.5155 0l2.8549 2.8549 2.8063-2.8063-2.8546-2.8546c.84532-1.7293.84532-3.7869 0-5.5162l2.8546-2.8546zm-3.2741 6.0804c.01318.01318.02474.027208.03764.040558.05817.060114.11392.12161.16663.1849.02868.034521.05518.070211.08222.1056.03295.04299.06555.086258.0961.13045.02986.043367.05834.087473.08587.13191.02332.037453.04519.075485.06687.11364.02869.050785.05753.10154.08331.15347.01127.022548.02107.045585.03179.068332.14139.30206.23592.62073.28173.94531l.000374-.0003742c.04353.30837.04321.62086-.000365.92923-.04512.31968-.13806.63342-.27588.93142-.0134.02876-.02592.05779-.0402.08624-.02365.04747-.04955.09417-.07564.14068-.02452.04343-.04974.08647-.07637.12899-.02485.0399-.05074.07936-.07747.11839-.03516.05111-.07235.10141-.11072.15091-.02249.02912-.044.05881-.0676.08733-.06503.07837-.13307.1549-.20646.22838l-.001874.001874c-.07431.07429-.15162.14327-.23094.20901-.02679.02216-.0549.04204-.08222.06322-.05166.04015-.10407.07917-.15749.11583-.03673.02511-.07395.04927-.11145.07272-.04612.02898-.09276.05646-.13995.08295-.04275.02385-.08544.04799-.12899.06979-.03522.01775-.07136.03293-.10706.04933-.21346.0974-.43433.17335-.66029.22326-.08145.01799-.16356.03234-.24592.04421-.0033.000469-.0066.0014-.0099.0018-.3082.04348-.62067.04353-.92887 0-.00232-.000337-.00462-.000765-.00694-.0011-.083358-.01194-.16641-.02674-.24884-.04495-.0002308-5.1e-5-.0005051 5.6e-5-.0007483 0-.22094-.04885-.43698-.1228-.64604-.21705-.04171-.01895-.08355-.03733-.1246-.0581-.03921-.0197-.07764-.04149-.1162-.06285-.052561-.02931-.10479-.05932-.15603-.09172-.032827-.02065-.065326-.04202-.097563-.06395-.06022-.04114-.1196-.08452-.17759-.13008-.021188-.0166-.042712-.0325-.063581-.0497-.080988-.06689-.1599-.13724-.23569-.21303-.075787-.07579-.14614-.1547-.21303-.23569-.017199-.02087-.033098-.04239-.049695-.06358-.045562-.05799-.088947-.11737-.13009-.17759-.021922-.03224-.0433-.06474-.063947-.09756-.032394-.05124-.062412-.10347-.091717-.15603-.021365-.03856-.043149-.07699-.06285-.1162-.020769-.04105-.039154-.0829-.0581-.1246-.094251-.20906-.1682-.4251-.21705-.64604-5.09e-5-.00023 5.62e-5-.000506 0-.000749-.018195-.08241-.032989-.16546-.044931-.24882-.0003317-.0023-.0007691-.0046-.0011-.0069-.043522-.30814-.043455-.62071 0-.92887.0001683-.00122.0005612-.00243.0007333-.00365.012015-.084456.026863-.16862.04531-.25213.049915-.22596.12586-.44684.22326-.66029.016406-.035706.031585-.071841.04933-.10706.021804-.043555.045938-.086238.069793-.12899.026482-.047189.05397-.093833.082948-.13995.023448-.037495.047608-.074721.072716-.11145.036665-.053417.07568-.10583.11583-.15749.021172-.027312.041057-.055429.063216-.082216.065737-.079319.13472-.15663.20901-.23094.000123-.0001229.0002433-.0002432.0003742-.0003741.0004864-.0004865.0009725-.0009733.00146-.00146.073476-.073385.15001-.14142.22838-.20646.02852-.023607.058217-.045113.087332-.067601.049505-.038362.099801-.075554.15091-.11072.039033-.02673.078492-.052614.11839-.077466.042524-.026633.085554-.051856.12899-.07637.046517-.026086.093213-.051985.14068-.075639.028446-.014276.057474-.026791.086236-.040195.29809-.13786.61182-.2308.9315-.27592l-.0003742-.0003742c.30842-.043591.62118-.043524.92961 8.8e-6l-.000374.0003741c.32458.045813.64325.14034.94531.28173.02275.01072.04579.02052.06833.03179.05193.025783.10269.054623.15347.083313.03816.021682.07619.043549.11364.066869.04444.027531.08854.056017.13191.085871.04419.03055.08746.063156.13045.096102.03539.027041.07108.053533.1056.082217.06329.052702.12478.10846.1849.16663.01335.012899.02739.02445.04057.037629z" />
    </SvgIcon>;
Currency.displayName = 'Currency';
