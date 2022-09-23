// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class loanCreated extends ethereum.Event {
  get params(): loanCreated__Params {
    return new loanCreated__Params(this);
  }
}

export class loanCreated__Params {
  _event: loanCreated;

  constructor(event: loanCreated) {
    this._event = event;
  }

  get borrowAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interestRate(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get paybackMonths(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get employer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get borrower(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get borrowToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class LoanFactory extends ethereum.SmartContract {
  static bind(address: Address): LoanFactory {
    return new LoanFactory("LoanFactory", address);
  }

  createNewLoan(
    _borrowAmount: BigInt,
    _interestRate: i32,
    _paybackMonths: i32,
    _employer: Address,
    _borrower: Address,
    _borrowToken: Address,
    _host: Address
  ): BigInt {
    let result = super.call(
      "createNewLoan",
      "createNewLoan(int256,int8,int8,address,address,address,address):(uint256)",
      [
        ethereum.Value.fromSignedBigInt(_borrowAmount),
        ethereum.Value.fromI32(_interestRate),
        ethereum.Value.fromI32(_paybackMonths),
        ethereum.Value.fromAddress(_employer),
        ethereum.Value.fromAddress(_borrower),
        ethereum.Value.fromAddress(_borrowToken),
        ethereum.Value.fromAddress(_host)
      ]
    );

    return result[0].toBigInt();
  }

  try_createNewLoan(
    _borrowAmount: BigInt,
    _interestRate: i32,
    _paybackMonths: i32,
    _employer: Address,
    _borrower: Address,
    _borrowToken: Address,
    _host: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createNewLoan",
      "createNewLoan(int256,int8,int8,address,address,address,address):(uint256)",
      [
        ethereum.Value.fromSignedBigInt(_borrowAmount),
        ethereum.Value.fromI32(_interestRate),
        ethereum.Value.fromI32(_paybackMonths),
        ethereum.Value.fromAddress(_employer),
        ethereum.Value.fromAddress(_borrower),
        ethereum.Value.fromAddress(_borrowToken),
        ethereum.Value.fromAddress(_host)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  employmentLoanOwners(param0: Address): BigInt {
    let result = super.call(
      "employmentLoanOwners",
      "employmentLoanOwners(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_employmentLoanOwners(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "employmentLoanOwners",
      "employmentLoanOwners(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  idToLoan(param0: BigInt): Address {
    let result = super.call("idToLoan", "idToLoan(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_idToLoan(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("idToLoan", "idToLoan(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  loanId(): BigInt {
    let result = super.call("loanId", "loanId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_loanId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("loanId", "loanId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get registry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateNewLoanCall extends ethereum.Call {
  get inputs(): CreateNewLoanCall__Inputs {
    return new CreateNewLoanCall__Inputs(this);
  }

  get outputs(): CreateNewLoanCall__Outputs {
    return new CreateNewLoanCall__Outputs(this);
  }
}

export class CreateNewLoanCall__Inputs {
  _call: CreateNewLoanCall;

  constructor(call: CreateNewLoanCall) {
    this._call = call;
  }

  get _borrowAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _interestRate(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _paybackMonths(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _employer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _borrower(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _borrowToken(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _host(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class CreateNewLoanCall__Outputs {
  _call: CreateNewLoanCall;

  constructor(call: CreateNewLoanCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
