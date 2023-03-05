interface ErrorMessageProps {
    error: string
}

export function ErrMessage({ error }: ErrorMessageProps) {
    return (
        <p className="text-center text-red-800">{error}. Try again later.</p>
    )
}