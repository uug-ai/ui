import { VariantProps, cva } from "class-variance-authority";
import { ReactElement } from "react";
import { cn } from "../../utils";

const TableStyles = cva(["table table-auto border-collapse w-full"], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    colors: {
      primary: "bg-primary-50 text-primary-950",
      secondary: "bg-primary-950 text-primary-50",
    },
    defaultVariants: {
      size: "md",
      colors: "primary",
    },
  },
});

export interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}

type Props<T> = {
  columns: ColumnProps<T>[];
  data?: T[];
} & VariantProps<typeof TableStyles>;

const Table = <T,>({ data, columns, size, colors }: Props<T>) => {
  const headers = columns.map((column, index) => {
    return (
      <th key={`header-${index}`} className="">
        {column.title}
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length} className="">
        No data
      </td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr key={`row-${index}`}>
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
    <table className={cn(TableStyles({ size, colors }), className)}>
      <thead className="">
        <tr>{headers}</tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
