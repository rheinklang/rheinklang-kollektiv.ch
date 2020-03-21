import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { PreviewImagePathOnly, PreviewImage } from '../types/PreviewImage';

export interface ImpressionByIdGQLEntry {
	title: string;
	description: string; // HTML
	images: PreviewImage[];
	showcaseImage: PreviewImagePathOnly;
}

export interface ImpressionByIdGQLResponse {
	impressionsCollection: ImpressionByIdGQLEntry[];
}

@Injectable({
	providedIn: 'root',
})
export class ImpressionByIdGQL extends Query<
	ImpressionByIdGQLResponse,
	{
		filter: {
			_id: string;
		};
	}
> {
	public document = gql`
		query GetImpressionById($filter: JsonType!) {
			impressionsCollection(filter: $filter, populate: 1) {
				title
				description
				images {
					value
				}
				showcaseImage {
					path
				}
			}
		}
	`;
}
