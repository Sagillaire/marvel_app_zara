import { Path, Svg } from "./styled";

interface Props {
  width?: number;
  color?: string;
}

const HeartIcon = ({ width, color }: Props) => {
  return (
    <Svg width={width} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
      <Path
        color={color}
        d="M12 3.97682L6 0.335205L0 3.97682V11.7803L12 22.0115L24 11.7803V3.97682L18 0.335205L12 3.97682Z"
      />
    </Svg>
  );
};

export default HeartIcon;
