import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface ContianerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: ContianerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
