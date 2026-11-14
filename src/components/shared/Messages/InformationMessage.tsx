function InformationMessage({ text }: { text: string }) {
  return (
    <p className="text-sm" role="status">
      {text}
    </p>
  );
}

export default InformationMessage;
