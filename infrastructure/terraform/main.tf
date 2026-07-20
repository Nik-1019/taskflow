# TODO: Priya Sharma — Terraform root module for TaskFlow AWS infrastructure.
# This is a placeholder; do NOT provision real resources in the scaffold phase.
terraform {
  required_version = ">= 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  # TODO: Configure remote backend (S3 + DynamoDB) before apply.
  # backend "s3" {
  #   bucket         = "taskflow-tf-state"
  #   key            = "taskflow/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "taskflow-tf-locks"
  # }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  type    = string
  default = "us-east-1"
}

# TODO: Add VPC, RDS, ElastiCache, ECS/Fargate, IAM, S3, CloudWatch modules.
