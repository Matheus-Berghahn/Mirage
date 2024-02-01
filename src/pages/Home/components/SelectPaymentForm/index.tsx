interface SelectPaymentFormProps extends React.HTMLProps<HTMLDivElement> {
}

export default function SelectPaymentForm({ ...rest }:SelectPaymentFormProps): React.ReactNode {
    return (
      <>
      <div {...rest}>
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </div>
      </>
    )
  }
  