import React, {useEffect} from 'react';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedSVGCircle = Animated.createAnimatedComponent(Circle);

function AnimatedPulseCircle() {
  const pulse = useSharedValue(0);

  const style = useAnimatedProps(() => {
    return {
      r: 10 + pulse.value * 35,
      opacity: 1 - pulse.value,
    };
  });

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1, {duration: 800, easing: Easing.linear}),
      -1,
      false,
    );
  }, [pulse]);

  return (
    <Svg width={100} height={100}>
      <AnimatedSVGCircle
        cx={50}
        cy={50}
        r={50}
        stroke="purple"
        strokeWidth=".5"
        fill="violet"
        animatedProps={style}
      />
    </Svg>
  );
}

export default AnimatedPulseCircle;