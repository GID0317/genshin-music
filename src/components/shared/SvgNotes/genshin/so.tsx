import {SvgNoteImageProps} from "..";

export default function soNote({style}: SvgNoteImageProps) {
    return <svg
        style={style}
        className={'svg-note'}
        viewBox="0 0 311.9 311.9"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            style={{
                strokeWidth: 6,
            }}
            d="m 216.53,161 10.35878,0.0486 c 4.67084,-0.24517 6.56926,-2.73971 6.59122,-4.63962 -0.0439,-3.69964 -3.67786,-5.5497 -6.77,-5.44899 h -10.18 c -1.97243,-17.48294 -12.15066,-32.98236 -27.41,-41.74 l 38.15768,-0.31598 c 3.79745,-0.0319 6.13174,-2.38354 6.15371,-4.28503 -0.0385,-3.70039 -3.021,-5.477853 -6.72139,-5.43899 L 84.88969,99.2043 c -3.478174,-0.04652 -6.443216,3.0816 -6.45969,4.97991 0.0573,3.0441 3.399922,5.02046 6.76,5.03578 h 37.59 c -15.25934,8.75764 -25.437568,24.25706 -27.41,41.74 l -10.334472,0.12153 c -3.988607,0.0264 -6.61336,2.57117 -6.629834,4.46948 0.02744,3.70668 3.087806,5.49343 6.794306,5.449 h 10.18 c 1.965558,17.4827 12.14108,32.98366 27.4,41.74 l -38.211987,0.0729 c -4.747032,0.0375 -6.156043,2.9753 -6.178013,4.87839 0.03844,3.02376 3.075723,5.14312 6.78,5.09869 l 141.96184,-0.0243 c 4.25762,-0.12924 6.29735,-2.9928 6.31385,-4.89269 0.029,-2.84892 -3.04589,-5.1608 -6.74569,-5.13301 h -37.58 c 15.26162,-8.75522 25.44069,-24.25593 27.41,-41.74 z M 113.37,120.8 c 13.68,-16.55 43.82,-14.22 67.34,5.2 8.33204,6.76652 15.04868,15.30751 19.66,25 H 108 c -3.13175,-10.33064 -1.13598,-21.53593 5.37,-30.15 z m 17.83,65.14 C 122.87571,179.18998 116.15972,170.6703 111.54,161 h 92.36 c 3.108,10.32332 1.10174,21.51011 -5.4,30.11 -13.64,16.6 -43.79,14.28 -67.31,-5.15 z"
        />
    </svg>
}