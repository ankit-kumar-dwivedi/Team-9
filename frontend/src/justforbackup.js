switch (this.state.step == 1) {
  case 1:
    return <StepOne key="personal" onSubmit={this.goToNext} />;
  case 2:
    return <StepThree key="shipping" onBack={this.goToPrev} onSubmit={this.goToNext} />;
  case 3:
    return <StepThree key="billing" onBack={this.goToPrev} onSubmit={this.goToNext} />;
}