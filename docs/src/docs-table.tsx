import React from "react";
import styled, { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";
import { StyledTable } from "@kiwicom/orbit-components/lib/Table";
import { StyledTableCell } from "@kiwicom/orbit-components/lib/Table/TableCell";
import { StyledTableRow } from "@kiwicom/orbit-components/lib/Table/TableRow";
import { StyledTableBody } from "@kiwicom/orbit-components/lib/Table/TableBody";

export const TableHeadCell = styled(StyledTableCell)`
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  text-align: left;
`;

const Table = styled(StyledTable)`
  border-collapse: separate;
  border-spacing: 0;

  ${StyledTableCell} {
    border-width: 1px;
    border-color: ${({ theme }) => theme.orbit.borderColorTable};
    border-style: none none solid none;
  }

  ${TableHeadCell} {
    border-style: solid none none none;

    &:first-child {
      border-top-left-radius: 6px;
      border-left-style: solid;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-right-style: solid;
    }
  }
  ${StyledTableBody} > ${StyledTableRow} {
    transition: transform ease-in-out 0.2s;

    &:hover {
      background-color: inherit;

      ${mq.desktop(css`
        border-radius: 6px;
        transform: scale(1.025);
        box-shadow: 0px 4px 8px 0px #252a311f, 0px 1px 4px 0px #252a3129;

        ${StyledTableCell} {
          border-top-style: solid;

          &:first-child {
            border-radius: 6px 0 0 6px;
          }

          &:last-child {
            border-radius: 0 6px 6px 0;
          }
        }
      `)}
    }

    ${StyledTableCell} {
      &:first-child {
        border-left-style: solid;
      }

      &:last-child {
        border-right-style: solid;
      }
    }

    &:last-child {
      ${StyledTableCell} {
        &:first-child {
          border-bottom-left-radius: 6px;
        }

        &:last-child {
          border-bottom-right-radius: 6px;
        }
      }
    }
  }
`;

const StyledTableOuter = styled.div<{
  showShadows: boolean;
  showRight: boolean;
  showLeft: boolean;
}>`
  max-width: 100%;
  width: 100%;
  position: relative;

  &::after,
  &::before {
    content: " ";
    display: ${({ showShadows }) => (showShadows ? "block" : "none")};
    position: absolute;
    width: 16px;
    height: 100%;
    top: 0;
    transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }

  &::after {
    opacity: ${({ showRight }) => (showRight ? "1" : "0")};
    background-image: ${({ theme }) => theme.orbit.backgroundTableShadowRight};
    right: 0;
  }

  &::before {
    opacity: ${({ showLeft }) => (showLeft ? "1" : "0")};
    left: 0;
    background-image: ${({ theme }) => theme.orbit.backgroundTableShadowLeft};
  }
`;

const StyledTableInner = styled.div<{ showShadows: boolean }>`
  width: 100%;
  ${({ showShadows }) =>
    showShadows &&
    css`
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    `};
`;

const PropsTable = ({ children }) => {
  const [shadows, setShadows] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [left, setLeft] = React.useState(false);

  const outer = React.useRef<HTMLDivElement>(null);
  const inner = React.useRef<HTMLDivElement>(null);
  const table = React.useRef<HTMLTableElement>(null);

  const handleScroll = () => {
    if (shadows && inner && table && outer && inner.current && table.current && outer.current) {
      setLeft(inner.current.scrollLeft >= 5);
      setRight(inner.current.scrollLeft + outer.current.clientWidth < table.current.clientWidth);
    }
  };

  const handleResize = React.useCallback(() => {
    if (table && outer && table.current && outer.current) {
      const showShadows = table.current?.clientWidth > outer.current?.clientWidth;
      setShadows(showShadows);
      setRight(showShadows);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <StyledTableOuter ref={outer} showShadows={shadows} showLeft={left} showRight={right}>
      <StyledTableInner ref={inner} onScroll={handleScroll} showShadows={shadows}>
        <Table ref={table}>{children}</Table>
      </StyledTableInner>
    </StyledTableOuter>
  );
};

export default PropsTable;
