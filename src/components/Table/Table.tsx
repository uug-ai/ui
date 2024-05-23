import { VariantProps, cva } from "class-variance-authority";
import { ReactElement } from "react";
import { cn } from "../../utils";

const TableStyles = cva(
  [" table-auto w-full border-collapse m-8 border-spacing-y-1"],
  {
    variants: {
      size: {
        sm: "text-sm leading-6",
        md: "text-base leading-8",
        lg: "text-lg leading-10",
      },
      colors: {
        primary: " text-primary-950",
        secondary: "bg-primary-950 text-primary-50",
      },
      defaultVariants: {
        size: "md",
        colors: "primary",
      },
    },
  }
);

export interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}

type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: Array<T>;
} & VariantProps<typeof TableStyles>;

const Table = <T,>({ data, columns, size, colors }: Props<T>) => {
  const headers = columns.map((column, index) => {
    return (
      <th key={`header-${index}`} className="text-left">
        {column.title}
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length} className="">
        Empty
      </td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr
          key={`row-${index}`}
          className="border-b-2 border-primary-950/[.10] p-2"
        >
          {columns.map((column, indexColumn) => {
            const value = column.render
              ? column.render(column, row as T)
              : (row[column.key as keyof typeof row] as string);

            return <td key={`cell-${indexColumn}`}>{value}</td>;
          })}
        </tr>
      );
    })
  );

  return (
    <table className={cn(TableStyles({ size, colors }))}>
      <thead className="">
        <tr className="border-b-2 border-primary-950/[.20] p-2">{headers}</tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
