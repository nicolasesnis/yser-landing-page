provider "aws" {
  access_key = "AKIAIGCOWL63ZG3OW4UA"
  secret_key = "CdkPaX5WyCWhqGOlLLSi2xjMBXKeapdONf8O/7Tm"
  region     = "eu-west-3"
}

resource "aws_instance" "example" {
  ami           = "ami-2757f631"
  instance_type = "t2.micro"
}
